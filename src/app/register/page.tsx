"use client"

import React, { useState } from "react"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    } from "@/components/ui/form"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectItem,
    SelectContent
    } from "@/components/ui/select"    
import { Input } from "@/components/ui/input"
import { Toaster , toast } from "sonner"
import { useRouter } from "next/navigation";


const RegisterPage =()=> {

    const form = useForm();

    const[showToaster , setShowToaster] = useState(false);
    const router = useRouter();

    const onSubmit=()=>{
        
        setShowToaster(true);

        if (showToaster) {
            toast("Registered Successfully", {
                description: "Your Account created successfully",
                action: {
                    label: "Go To Home",
                    onClick: () => router.push('/'),
                },
                duration: Infinity
            });
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
                <div className="bg-purple-100 p-4 rounded text-2xl " style={{ width: '600px', height: '550px' }}>
                    <h1 className="text-3xl font-bold flex items-center justify-center ">Register</h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2 mt-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel style={{ fontSize: '20px' }}>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                control={form.control}
                                name="age"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel style={{ fontSize: '20px' }}>Age</FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="number" 
                                                required
                                                placeholder="Enter your age" 
                                                min="18" 
                                                max="59" 
                                                {...field} 
                                            />
                                        </FormControl>
                                        <FormDescription>Please enter your age between 18 and 59.</FormDescription>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="age"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel style={{ fontSize: '20px' }}>Role</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                                <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select your role" />
                                                </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                <SelectItem value="Teacher">Teacher</SelectItem>
                                                <SelectItem value="Teacher Assistant">Teacher Assistant</SelectItem>
                                                <SelectItem value="Student">Student</SelectItem>
                                                </SelectContent>
                                            </Select>
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center justify-center">
                            <Button
                                className="mt-4 bg-gray-950 transition-colors align-center  inline-flex items-center justify-center duration-500 text-gray-50 py-2 px-2 rounded-sm text-xl font-bold hover:text-yellow-300 inline-block"
                                style={{width:'100px'}}
                                >
                                Submit
                            </Button>
                            </div>
                        </form>
                    </Form>
                </div>

                {
                    showToaster &&  (
                        <Toaster/>)
                }
            </div>

    )
}

export default RegisterPage;
