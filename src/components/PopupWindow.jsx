const PopupWindow = ({ description, learnings, role, challenges, onClose }) => {
  return (
    <div className="popup-window">
      <p className="description">{description}</p>
      <p className="learnings">{learnings}</p>
      <p className="role">{role}</p>
      <p className="challenges">{challenges}</p>
      <button onClick={onClose} className="close-button">
        Close window
      </button>
    </div>
  );
};

export default PopupWindow;