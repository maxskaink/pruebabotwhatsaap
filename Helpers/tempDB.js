const fs = require('fs');

class userManager {
    constructor(fileDirection) {
      this.file = fileDirection;
      this.users = [];
      this.uploadUsers();
    }
  
    uploadUsers() {
      try {
        if (!fs.existsSync(this.file)) {
          fs.writeFileSync(this.file, '[]');
        }
        const data = fs.readFileSync(this.file, 'utf-8');
        this.users = JSON.parse(data);
      } catch (error) {
        console.log('Error al cargar los usuarios:', error);
      }
    }
  
    saveUsers() {
      try {
        fs.writeFileSync(this.file, JSON.stringify(this.users, null, 2));
      } catch (error) {
        console.log('Error al guardar los usuarios:', error);
      }
    }
  
    addUser(usuario) {
      this.users.push(usuario);
      usuario.id = this.users.length
      this.saveUsers();
    }
  
    getUserWithId(id) {
      return this.users.find(usuario => usuario.id === id);
    }
  
    getUsers() {
      return this.users;
    }
    deleteFirstUser() {
      if (this.users.length > 0) {
        this.users.shift();
        this.saveUsers();
        return true
      }else return false
    }
  }


  module.exports= { userManager }