import axios from 'axios'

	const token =localStorage.getItem('token');
		 axios({
		        method:'GET',
		        url : 'http://localhost:8000/api/user/',
		        headers : {
		          'Content-Type':'application/json',
		          'Authorization':"JWT "+token
		        }
   		 }).then(function(response){
   		 	const usersData  = response.data.results
   		 })
export default usersData
