 export default function login(){

    return `<h1>Login</h1> 
    <form action='/submit' method='post'>    
        <input type='text' name='username' placeholder='Username'>
        <br/> <input type='password' name='password' placeholder='Password'>
       <br/> <button type='submit'>Login</button> </form>
       <a href='/'>Home</a>`; 
 }