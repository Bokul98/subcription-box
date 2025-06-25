import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  useEffect(() => {
    document.title = "PROFILE | Subscription Box";
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <img src={user?.photoURL} alt="User" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <p><strong>Email:</strong> {user?.email}</p>
      <form onSubmit={handleUpdate} className="mt-4 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
          placeholder="Name"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="input input-bordered w-full"
          placeholder="Photo URL"
        />
        <button type="submit" className="btn btn-primary w-full">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;