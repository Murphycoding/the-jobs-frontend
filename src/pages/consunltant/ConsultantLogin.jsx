import { Link } from "react-router-dom";
const Consunltantlogin = () => {
    return (
    <div class="container mx-auto p-8 mt-44 flex">
        <div class="max-w-md w-full mx-auto">
           

            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                <div className=" h3  text-center">Consunltant</div>
                    <form method="POST" class="" action="#" onSubmit="return false;">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>

                            <input type="text" name="email" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>
                
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>

                            <input type="text" name="password" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>

                        <button class="w-full p-3 mt-4 bg-color2 text-white rounded shadow">Login</button>
                    </form>
                </div>
                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                 
                 <Link to="/job-seeker/login" className="text-gray-600">Job Seeker</Link>
                 <Link to="/consultant/login" className="text-gray-600">Consunltant</Link>
                 <Link to="/admin/login" className="text-gray-600">Admin</Link>
             </div> 
             
                
                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                    <a href="Consunltantlogin" class="font-medium text-indigo-500">Create account</a>

                    <a href="#" class="text-gray-600">Forgot password?</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Consunltantlogin