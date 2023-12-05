class Todo {
    
    id: string;
    text: string;
    
    constructor(todoText: string) {
      this.text = todoText;
      this.id = new Date().toISOString(); // Use 'new Date()' to create a Date object
    }
  }
  
  export default Todo;
  