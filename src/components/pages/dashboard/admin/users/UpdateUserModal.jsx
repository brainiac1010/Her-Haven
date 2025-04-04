import React, { useState } from 'react'
import { useUpdateUserRoleMutation } from '../../../../../redux/features/auth/authApi';

const UpdateUserModal = ({ user, onClose, onRoleUpdate }) => {
  const [role, setRole] = useState(user.role);
  const [updateUserRole] = useUpdateUserRoleMutation();

  const handleUpdateRole = async () => {
    try {
      await updateUserRole({ userId: user?._id, role }).unwrap();
      alert("Role updated successfully!");
      onRoleUpdate();  
      onClose();       
    } catch (error) {
      console.error("Failed to update user role", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Update User Role</h3>
        <div>
          <label htmlFor="role">Select Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            {/* Add more roles as needed */}
          </select>
        </div>
        <div className="modal-actions">
          <button onClick={handleUpdateRole} className="btn btn-primary">Update Role</button>
          <button onClick={onClose} className="btn btn-secondary">Close</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserModal;
