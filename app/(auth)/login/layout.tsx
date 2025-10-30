const AuthLayout = ({ children} : {children:React.ReactNode}) =>{
  return(
    <div>
    <nav className="bg-red-500 text-white">
      This is navbar without /
    </nav>
    
    {children}  
    </div>
  )
}

export default AuthLayout;