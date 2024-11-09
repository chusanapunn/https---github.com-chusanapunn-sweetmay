"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ImageUploader from '../components/ImageUploader';


const MyAccountPage = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait until session is fetched

    if (!session) {
      router.push('/'); // Redirect if not authenticated
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user', {
          // headers: {
          //   // Authorization: `Bearer ${session?.accessToken}`
          // }
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Error fetching data", response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    if (session){
      fetchUserData();
    }
  }, [session, status, router]);

  if (status == 'loading' || !session){
    return <div>Loading...</div>;
  }

  return (
    <div className="p-12">
      <h1 className="text-2xl font-semibold mb-6">My Account</h1>
      
      {userData ? (
        <div className="bg-white shadow-md rounded-lg p-8">
          {/* <p><strong>Name:</strong> {userData?.name || session?.user.name}</p>
          <p><strong>Email:</strong> {userData?.email || session?.user.email}</p> */}
          {/* Add more account information as needed */}
          <ImageUploader/>
        </div>
      ) : (
        <p>Loading account details...</p>
      )}
      
    </div>
  );
};

export default MyAccountPage;
