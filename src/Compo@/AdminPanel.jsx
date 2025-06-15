import { useState } from "react";
import { db } from "../fireConfig";
import { doc, setDoc } from "firebase/firestore";

function AdminPanel() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const docId = 'wCsFWQwxGhLTru8hBd0H';

  const [formData, setFormData] = useState({
    instructor: '',
    address: '',
    title: '',
    subtitle: '',
    description: '',
    schedule: [{ day: 1, topic: '', description: '' }],
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result.split(',')[1];
      const formData = new FormData();
      formData.append('image', base64);

      setUploading(true);
      try {
        const res = await fetch(`https://api.imgbb.com/1/upload?key=d875ba89b090664482033f630f92069c`, {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        if (data.success) {
          setImage(data.data.url);
        } else {
          alert("Image upload failed");
          console.error(data);
        }
      } catch (err) {
        console.error("Upload error:", err);
        alert("Image upload error");
      }
      setUploading(false);
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleScheduleChange = (index, field, value) => {
    const updatedSchedule = [...formData.schedule];
    updatedSchedule[index][field] = value;
    setFormData({ ...formData, schedule: updatedSchedule });
  };

  const addScheduleField = () => {
    setFormData({
      ...formData,
      schedule: [...formData.schedule, { day: formData.schedule.length + 1, topic: '', description: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const finalData = {
      ...formData,
      image,
      createdAt: new Date(),
    };

    try {
      const docRef = doc(db, "demoClasses", docId);
      await setDoc(docRef, finalData);

      alert("Template updated successfully!");

      // Reset form
      setImage(null);
      setFormData({
        instructor: '',
        address: '',
        title: '',
        subtitle: '',
        description: '',
        schedule: [{ day: 1, topic: '', description: '' }],
      });
    } catch (err) {
      console.error("Error updating document:", err);
      alert("Failed to update. Check console.");
    }

    setSubmitting(false);
  };

  return (
    <div className="container mt-4 position-relative">
      {submitting && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(255,255,255,0.7)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <h2 className="mb-4">Create Demo Class Template</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-lg">

        {/* Image Upload */}
        <div className="mb-3">
          <label className="form-label">Upload Photo</label>
          <input type="file" className="form-control" onChange={handleImageUpload} />
          {uploading && <p className="text-info mt-2">Uploading image...</p>}
          {image && (
            <img src={image} alt="Preview" className="mt-3" style={{ width: '150px', borderRadius: '8px' }} />
          )}
        </div>

        {/* Text Fields */}
        <div className="mb-3">
          <label className="form-label">Instructor Name</label>
          <input type="text" className="form-control" name="instructor" value={formData.instructor} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Class Address</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Class Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Class Description</label>
          <input type="text" className="form-control" name="description" value={formData.description} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Sub Title</label>
          <input type="text" className="form-control" name="subtitle" value={formData.subtitle} onChange={handleChange} />
        </div>

        {/* Schedule Fields */}
        <hr />
        <h5 className="mt-3">📅 Day-wise Class Plan</h5>
        {formData.schedule.map((item, index) => (
          <div className="card p-3 mb-3 bg-light" key={index}>
            <h6 className="mb-2">Day {item.day}</h6>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Day Title"
                value={item.topic}
                onChange={(e) => handleScheduleChange(index, 'topic', e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="form-control"
                placeholder="Day Description"
                value={item.description}
                onChange={(e) => handleScheduleChange(index, 'description', e.target.value)}
              ></textarea>
            </div>
          </div>
        ))}

        <button type="button" className="btn btn-outline-primary mb-3" onClick={addScheduleField}>
          + Add Another Day
        </button>

        <div>
          <button type="submit" className="btn btn-success" disabled={submitting}>
            {submitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Submitting...
              </>
            ) : (
              "Submit Template"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPanel;
