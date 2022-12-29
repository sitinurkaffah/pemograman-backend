// import database
const db = require("../config/database");

// membuat class Student
class Student {
  // solution with promise + async await
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students";
      /**
       * Melakukan query meggunakan method query
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(data) {
    // Melakukan insert data ke database
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO student SET ?";
      db.query(query, data, (err, results) => {
        resolve(data);
      });
  });
}

/**
 * membuat method static find: melakukan select data by id
 */

static find(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM students WHERE id= ?`;
    db.query(query, id, (error, results) => {
      if (error) {
        reject(error);
      } else {
        const [student] = results;
        resolve(student);
      }
    });
  });
}

static async update(id, data) {
  await new Promise((resolve, reject) => {
    const query = `UPDATE students SET ? WHERE id = ?`;
    db.query(query, [data, id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });

  const student = await this.find(id);
  return student;
}

static async delete(id) {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM students WHERE id = ?";
    db.query(sql, id, (err, results) => {
      resolve(results)
      });
    });
  }
}

// export class Student
module.exports = Student;