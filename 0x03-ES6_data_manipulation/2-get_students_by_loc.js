export default getStudentsByLocation(students, city) {
	return students.filter((obj) => obj.location === city);
}
