'use client';
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {useState} from 'react';
import {signIn} from 'next-auth/react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../BUtton";
import UseLoginModal from "../hooks/useLoginModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const router= useRouter();
    const loginModal= UseLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit,
         formState: {
        errors,
    }}= useForm<FieldValues>({
        defaultValues:{
            email:'', 
            password:''
        }
    });
    const onSubmit: SubmitHandler<FieldValues>= (data ) =>{
        setIsLoading(true);
        signIn('credentials', {
           ...data,
              redirect: false,
        }).then((response)=>{

            setIsLoading(false);
            if(response?.ok){
                toast.success('Login Success');
                router.refresh();
                loginModal.onClose();
            }
            if(response?.error){
                toast.error(response.error);
            }
        })
    }
    const bodyContent=(
        <div className="flex flex-col gap-4 "> 
            <Heading title="Welcome Back" subTitle="Login to your Account!" center/>
            <Input  id= "email"
            label="Email"
            disabled= {isLoading}
            errors={errors}
            register={register}
            required
            />
            <Input  id= "password"
            type="password"
            label="Password"
            disabled= {isLoading}
            errors={errors}
            register={register}
            required
            />
        </div>
    )
    const footerContent=(
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button outline label='Continue with Google' icon={FcGoogle} onClick={()=>{}}></Button>
            <Button outline label='Continue with Github' icon={AiFillGithub} onClick={()=>{}}></Button>
            <div className="text-neutral-500 text-center mt-4 font-light "> 
            <div className="justify-center flex flex-row items-center gap-2 " >
                  <div>Don't have an Account</div>
             <div className="text-neutral-800 cursor-pointer hover:underline " onClick={loginModal.onClose}>Register</div>
            </div>
            </div>
        </div>
    )
    return ( 
        <Modal disabled={isLoading} isOpen= {loginModal.isOpen}
        title="Login" 
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
     );
}
 
export default LoginModal;