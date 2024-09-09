/* 3. Patient Records and Appointment Manager */
/* Guspan */
class Patient {
  constructor(name, age, patient_id) {
    this.name = name;
    this.age = age;
    this.patient_id = patient_id;
  }
}
class InPatient extends Patient{
  constructor(name, age, patient_id) {
    super(name, age, patient_id);
  }
  assignRoom(roomNumber) {
    this.roomNumber = roomNumber;
    let room = []
    room[room.length] = {
      name: this.name,
      age: this.age,
      patient_id: this.patient_id,
      roomNumber: this.roomNumber
    }
    console.log("InPatient", room[0])
  }
}
class OutPatient extends Patient{
  constructor(name, age, patient_id) {
    super(name, age, patient_id);
  }
  rescheduleAppointment(appointmentDate) {
    this.appointmentDate = appointmentDate;
    let appoint = []
    appoint[appoint.length] = {
      name: this.name,
      age: this.age,
      patient_id: this.patient_id,
      appointmentDate: this.appointmentDate
    }
    console.log("OutPatient", appoint[0])
  }
}

const inPatient = new InPatient("John Doe", 45, "P001");
inPatient.assignRoom("101A")

const outPatient = new OutPatient("Jane Smith", 30, "P002");
outPatient.rescheduleAppointment("2024-09-01")