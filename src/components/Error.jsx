const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 mb-3 rounded-md uppercase font-bold">
      {children}
    </div>
  )
}

export default Error