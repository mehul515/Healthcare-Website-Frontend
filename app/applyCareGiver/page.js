"use client";

import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ApplyCaregiver = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: {
      street: "",
      city: "",
      country: "",
      postalCode: "",
    },
    age: "",
    fees: "",
    bio: "",
    experience: "",
  });
  const [image, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.address) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();

    // Manually append each field
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("gender", formData.gender);
    formPayload.append("age", formData.age);
    formPayload.append("fees", formData.fees);
    formPayload.append("bio", formData.bio);
    formPayload.append("experience", formData.experience);

    // Append address fields
    formPayload.append("address[street]", formData.address.street);
    formPayload.append("address[city]", formData.address.city);
    formPayload.append("address[country]", formData.address.country);
    formPayload.append("address[postalCode]", formData.address.postalCode);

    // Append the profile picture if available
    if (image) {
      formPayload.append("image", image);
    }

    try {
      const response = await axios.post(
        "https://healthcare-website-backend.onrender.com/api/caregivers/add",
        formPayload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        toast.success("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          gender: "",
          address: {
            street: "",
            city: "",
            country: "",
            postalCode: "",
          },
          age: "",
          fees: "",
          bio: "",
          experience: "",
        });
        setProfilePicture(null);
      } else {
        toast.error(response.data.message || "Failed to submit application.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-4">
      <Toaster position="top-center" />
      <h2 className="text-center mb-6 text-3xl md:text-3xl font-bold sm:text-4xl text-gray-700">
        Apply as a Caregiver
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 text-gray-600">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              className="mt-1 text-gray-700 font-medium"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              className="mt-1 text-gray-700 font-medium"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, gender: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                className="mt-1 text-gray-700 font-medium"
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <Label>Address</Label>
            <Input
              type="text"
              placeholder="Street"
              name="street"
              value={formData.address.street}
              onChange={handleChange}
              required
              className="mb-2 mt-1 text-gray-700 font-medium"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 font-medium">
              <Input
                type="text"
                placeholder="City"
                name="city"
                value={formData.address.city}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                placeholder="Country"
                name="country"
                value={formData.address.country}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                placeholder="Postal Code"
                name="postalCode"
                value={formData.address.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                className="mt-1 text-gray-700 font-medium"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="fees">Fees (per hour)</Label>
              <Input
                className="mt-1 text-gray-700 font-medium"
                type="number"
                id="fees"
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              className="mt-1 text-gray-700 font-medium"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="experience">Experience (in years)</Label>
            <Input
              className="mt-1 text-gray-700 font-medium"
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <Input
              className="mt-1 text-gray-700 font-medium"
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-6"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
};

export default ApplyCaregiver;