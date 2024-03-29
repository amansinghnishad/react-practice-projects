function TodoAdd() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter the TODO" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
