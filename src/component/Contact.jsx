
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';



export default function Contact() {
    const { register, handleSubmit, watch,reset } = useForm();
    let nameRef = useRef();
    let emailRef = useRef()
    const [feedback, setFeedback] = useState('');
    const [buttonText, setButtonText] = useState('Send message');
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data) => {
        //console.log(data)
        setButtonText('Sending...'); // Change button text to indicate loading
        setIsLoading(true); // Set loading state to true
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let message = watch("message")
        const token = "7084530824:AAGVjoYwtPUYf15A3t-ok5EC5I3j8ijr860";
        const chat_id = "-4510040549"
        let text = `name=${name}\n email=${email}\n message=${message}`;
        console.log(text);

        // let url=`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`
        // let api=new XMLHttpRequest()
        // api.open("GET",url,true)
        // api.send() 
        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`, {
                method: 'POST',
            });
            const result = await response.json();

            if (result.ok) {
                setFeedback('Message sent successfully!');
                 reset()
            } else {
                setFeedback('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setFeedback('An error occurred. Please try again.');
        }
        finally{
        setButtonText('Send message');
        setIsLoading(false);
        }
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='border border-gray-300 rounded-lg shadow-lg p-8 w-full max-w-lg bg-transparent'>
                <h1 className='text-3xl font-bold text-white text-center mb-3'>Contact me</h1>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label='Name'
                        type="text"
                        place_h="Enter Your Name"
                        label_svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="white" fill="none">
                            <path d="M16.0005 9.05826L16.421 6.9029C16.9159 4.36646 15.0233 2 12.5 2C9.97667 2 8.08414 4.36646 8.57901 6.9029L8.99952 9.05826C9.33325 10.7688 10.7983 12 12.5 12C14.2017 12 15.6668 10.7688 16.0005 9.05826Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M11.25 11.5C11.25 11.0858 10.9142 10.75 10.5 10.75C10.0858 10.75 9.75 11.0858 9.75 11.5H11.25ZM15.25 11.5C15.25 11.0858 14.9142 10.75 14.5 10.75C14.0858 10.75 13.75 11.0858 13.75 11.5H15.25ZM12.5903 15.9983L12.5612 15.2488H12.5612L12.5903 15.9983ZM12.4097 15.9983L12.4388 15.2488H12.4388L12.4097 15.9983ZM13.662 15.1181L14.2025 15.638L13.662 15.1181ZM9.75 11.5V12.7818H11.25V11.5H9.75ZM13.75 11.5V12.7818H15.25V11.5H13.75ZM12.5612 15.2488C12.5409 15.2496 12.5205 15.25 12.5 15.25V16.75C12.5399 16.75 12.5797 16.7492 12.6193 16.7477L12.5612 15.2488ZM12.3807 16.7477C12.4203 16.7492 12.4601 16.75 12.5 16.75V15.25C12.4795 15.25 12.4591 15.2496 12.4388 15.2488L12.3807 16.7477ZM13.75 12.7818C13.75 13.2975 13.7441 13.5475 13.6762 13.7763C13.6172 13.9752 13.4912 14.2139 13.1215 14.5981L14.2025 15.638C14.6709 15.1512 14.9638 14.7101 15.1143 14.2029C15.2559 13.7255 15.25 13.2429 15.25 12.7818H13.75ZM12.6193 16.7477C12.658 16.7462 12.7935 16.7443 12.9524 16.6889C13.1005 16.6373 13.2234 16.5571 13.3273 16.4773C13.5227 16.3272 13.7894 16.0676 14.2025 15.638L13.1215 14.5981C12.6968 15.0397 12.5054 15.2171 12.4135 15.2878C12.3736 15.3184 12.3954 15.2945 12.4589 15.2724C12.5331 15.2466 12.6005 15.2473 12.5612 15.2488L12.6193 16.7477ZM9.75 12.7818C9.75 13.2429 9.74409 13.7255 9.88572 14.2029C10.0362 14.7101 10.3291 15.1512 10.7975 15.638L11.8785 14.5981C11.5088 14.2139 11.3828 13.9752 11.3238 13.7763C11.2559 13.5475 11.25 13.2975 11.25 12.7818H9.75ZM12.4388 15.2488C12.3995 15.2473 12.4669 15.2466 12.5411 15.2724C12.6046 15.2945 12.6264 15.3184 12.5865 15.2878C12.4946 15.2171 12.3032 15.0397 11.8785 14.5981L10.7975 15.638C11.2106 16.0676 11.4773 16.3272 11.6727 16.4773C11.7766 16.5571 11.8995 16.6373 12.0476 16.6889C12.2065 16.7443 12.342 16.7462 12.3807 16.7477L12.4388 15.2488Z" fill="currentColor" />
                            <path d="M10.5 14C7.25637 14.9265 5.63455 15.3897 4.64608 16.5838C4.5503 16.6995 4.45979 16.8195 4.37481 16.9433C3.61655 18.0485 3.5139 19.4587 3.5 22M14.5 14C17.7436 14.9265 19.3654 15.3897 20.3539 16.5838C20.4497 16.6995 20.5402 16.8195 20.6252 16.9433C21.3835 18.0485 21.4861 19.4587 21.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12.5 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8.5 6H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                        register={{ ...register("name", { required: true }) }}
                        ref={nameRef}
                    />
                    <Input
                        label='Email'
                        type="email"
                        place_h="Enter Your Email ID"
                        label_svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="white" fill="none">
                            <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.474C5.89432 19.3936 4.29206 19.3534 3.36301 18.5803C2.89667 18.183 2.53705 17.6174 2.41778 16.9085C2.30015 16.211 2.52869 15.4885 3.03505 15.0006C3.89469 14.1667 5.79332 14.1667 9.59057 14.1667H14.4094C18.2067 14.1667 20.1053 14.1667 20.965 15.0006C21.4713 15.4885 21.6998 16.211 21.5822 16.9085C21.4629 17.6174 21.1033 18.183 20.637 18.5803C19.7079 19.3534 18.1057 19.3936 14.9012 19.474C14.4332 19.485 13.9663 19.4939 13.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.5 7L16.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 11.5L12 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 22V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                        register={{ ...register("email", { required: true }) }}
                        ref={emailRef}
                    />
                    <textarea className='h-[36vh] w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                        name=""
                        id=""
                        placeholder='Write Your Message'
                        {...register("message", { required: true })}
                    />
                    {feedback && (
                        <div className={`mt-2 p-2 text-center ${feedback.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                            {feedback}
                        </div>
                    )}
                    <button
                        className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300'
                        type="submit" onClick={onSubmit} disabled={isLoading}>
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}

