import BorderButton from "../components/BorderButton";
import Button from "../components/Button";
import CircularButton from "../components/CircularButton";
import Skeleton from "../layouts/Skeleton";
import OptionComponent from "../components/OptionComponent";


export default function ButtonPage(props){
    return(
        <Skeleton>
            <div className="container mx-auto py-4  md:w-5/5 w-12/12 px-4">
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300 bg-white">
                   <h2 className="pt-6 pb-2 px-12 font-bold">Log in Sign up Buttons</h2>
                   <div className="py-6 px-12 flex space-x-4">
                      <Button title={'Admin'}/>

                      <Button title={'Counsellor'} bgColor={'btn-bg-green'} bgColorHover={''}/>

                      <Button 
                        title={'Branch'} 
                        bgColor={'bg-orange-500'} 
                        bgColorHover={'hover:bg-orange-600'}
                      />

                      <Button 
                        title={'Sign In'} 
                        bgColor={'btn-bg-green'} 
                        bgColorHover={''}
                        size={'px-28'}
                      />
                   </div>


                   <h2 className="pt-6 pb-2 px-12 font-bold">List & Form Primary Button</h2>
                   <div className="py-6 px-12 flex space-x-4">
                      <CircularButton title={'New Enquiry'} bgColor={'btn-bg-green'} bgColorHover={''}/>

                      <CircularButton title={'Submit'} bgColor={'btn-bg-green'} bgColorHover={''}/>

                      <CircularButton title={'Reset'} bgColor={'btn-bg-gray'} bgColorHover={''}/>

                      <CircularButton title={'Submit'} />
                      
                   </div>



                   <h2 className="pt-6 pb-2 px-12 font-bold">Filter Button</h2>
                   <div className="py-6 px-12 flex space-x-4">
                      <BorderButton title={'Source'} bgColor={'bg-btn-green'} bgColorHover={''} color={'text-gray-800'}/>

                      <BorderButton title={'Destination'} bgColor={'btn-bg-green'} bgColorHover={''}/>

                      <BorderButton title={'Branch'} bgColor={'bg-btn-green'} bgColorHover={''} color={'text-gray-800'}/>

                      <OptionComponent  allOptions={['Branch Waise', 'Last 3 Months', 'Last 9 Months', 'Last Weak', 'This Year', 'This Month', 'Today']}></OptionComponent>
                      
                   </div>
                </div>
            </div>
        </Skeleton>
    )
}