'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser, FaPlus, FaTrashAlt, FaCamera, FaSpinner } from 'react-icons/fa'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import axios from 'axios'
import { toast, Toaster } from "sonner";

export default function UpdatePatientProfileForm() {
    const router = useRouter()

    // Loading state to track loading status
    const [loading, setLoading] = useState(true);

    // Initialize patient state as an empty object initially
    const [patient, setPatient] = useState(null)

    // Form data state (initial values will be set after patient data is loaded)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        gender: '',
        dob: '',
        phone: '',
        medicalHistory: [],
        image: null, // New field for profile picture
    })

    const [profilePicturePreview, setProfilePicturePreview] = useState(null)

    useEffect(() => {
        // Check if patient data is already loaded from localStorage
        const patientData = localStorage.getItem('user')

        if (patientData) {
            const parsedPatientData = JSON.parse(patientData)

            // Set patient data to the state
            setPatient(parsedPatientData)
            setFormData({
                name: parsedPatientData.name || '',
                email: parsedPatientData.email || '',
                address: parsedPatientData.address || '',
                gender: parsedPatientData.gender || '',
                dob: parsedPatientData.dob || '',
                phone: parsedPatientData.phone || '',
                medicalHistory: parsedPatientData.medicalHistory || [],
                image: parsedPatientData.image || null, // Assuming profile image is stored in localStorage
            })

            setProfilePicturePreview(parsedPatientData.profileImage || null)

            // Set loading to false once data is loaded
            setLoading(false);
        } else {
            console.log("Patient data not found in localStorage.")
        }
    }, []) // This effect should only run once when the component mounts

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleMedicalHistoryChange = (index, field, value) => {
        setFormData(prevData => ({
            ...prevData,
            medicalHistory: prevData.medicalHistory.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        }))
    }

    const addMedicalHistoryItem = () => {
        setFormData(prevData => ({
            ...prevData,
            medicalHistory: [
                ...prevData.medicalHistory,
                { condition: '', diagnosisDate: '', notes: '' }
            ]
        }))
    }

    const removeMedicalHistoryItem = (index) => {
        setFormData(prevData => ({
            ...prevData,
            medicalHistory: prevData.medicalHistory.filter((_, i) => i !== index)
        }))
    }

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFormData(prevData => ({
                ...prevData,
                image: file
            }))

            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePicturePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when form is being submitted
        const userId = patient._id;
        const endpoint = `https://healthcare-website-backend.onrender.com/api/user/${userId}`;
        const token = localStorage.getItem('token');

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === 'medicalHistory') {
                formDataToSend.append(key, JSON.stringify(formData[key])); // Convert medical history to JSON string
            } else if (key === 'image' && formData.image) {
                formDataToSend.append(key, formData.image);
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const response = await axios.put(endpoint, formDataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                const updatedUser = response.data.user;
                localStorage.setItem('user', JSON.stringify(updatedUser));
                toast.success('Profile updated successfully!');
                setTimeout(() => {
                    router.push('/user/profile');
                }, 200)
            } else {
                toast.error('Failed to update profile. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred while updating the profile.');
        } finally {
            setLoading(false); // Set loading to false after request is finished
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <FaSpinner className="animate-spin text-4xl text-primary" />
            </div> // Show spinner while loading
        );
    }

    return (
        <>
            <Toaster position='top-center' />
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl my-10 mx-auto p-14 bg-white shadow-lg rounded-lg">
                {/* Profile Image Section */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <img
                            src={profilePicturePreview || formData.image || '/default-avatar.png'} // Fallback to default image if no preview or profile picture
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* File input styled as button */}
                    <Label htmlFor="image" className="cursor-pointer text-sm text-primary font-medium bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-full border border-gray-300 flex items-center space-x-2">
                        <FaCamera />
                        <span>Edit Profile Picture</span>
                        <Input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleProfilePictureChange}
                            className="hidden" // Hide the actual input field
                            accept="image/*"
                        />
                    </Label>
                </div>

                {/* Name and Email Fields (Aligned on Large Screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <div className="mt-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="text-gray-400" />
                            </div>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="pl-10 "
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <div className="mt-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="text-gray-400" />
                            </div>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-10 "
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Gender, DOB, and Phone Fields (Aligned on the same row on large screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Gender Select */}
                    <div>
                        <Label htmlFor="gender">Gender</Label>
                        <div className="mt-1 relative">
                            <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                                <SelectTrigger className="pl-3 w-full">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Date of Birth Field */}
                    <div>
                        <Label htmlFor="dob">Date of Birth</Label>
                        <div className="mt-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaCalendarAlt className="text-gray-400" />
                            </div>
                            <Input
                                type="date"
                                name="dob"
                                id="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="pl-10 "
                            />
                        </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <div className="mt-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaPhone className="text-gray-400" />
                            </div>
                            <Input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Address Field */}
                <div>
                    <Label htmlFor="address">Address</Label>
                    <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                {/* Medical History Section */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Medical History</h3>
                    {formData.medicalHistory.map((item, index) => (
                        <div key={index} className="space-y-4 mb-4 p-6 border rounded-lg shadow-sm bg-gray-50">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor={`condition-${index}`}>Condition</Label>
                                    <Input
                                        type="text"
                                        id={`condition-${index}`}
                                        value={item.condition}
                                        onChange={(e) => handleMedicalHistoryChange(index, 'condition', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor={`diagnosisDate-${index}`}>Diagnosis Date</Label>
                                    <Input
                                        type="date"
                                        id={`diagnosisDate-${index}`}
                                        value={item.diagnosisDate}
                                        onChange={(e) => handleMedicalHistoryChange(index, 'diagnosisDate', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor={`notes-${index}`}>Description</Label>
                                <Textarea
                                    id={`notes-${index}`}
                                    value={item.notes}
                                    onChange={(e) => handleMedicalHistoryChange(index, 'notes', e.target.value)}
                                    rows={3}
                                />
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => removeMedicalHistoryItem(index)}
                                className="mt-2 flex items-center text-red-600 hover:bg-red-100 p-1 rounded-full"
                            >
                                <FaTrashAlt />
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        onClick={addMedicalHistoryItem}
                        className="mt-4 flex items-center text-primary border-primary hover:text-primary text-[13px] h-9 px-2"
                    >
                        <FaPlus className="-mr-1 scale-75" /> Add Medical History Item
                    </Button>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <Button type="submit" className="mt-6" disabled={loading}>
                        {loading ? <FaSpinner className="animate-spin mr-2" /> : 'Update Profile'}
                    </Button>
                </div>
            </form>
        </>
    )
}