const TodoHeader = ({ children }) => {
  return (
    <div className="flex items-center justify-between gap-7 mb-2" id="task-control">
      {children}
    </div>
  );
};

export default TodoHeader;