import React from 'react'
import Card from './Card'
import Button from './Button'
import './Home.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    
    <Navbar />
   <div className="content">
    <Card text = 'Hero' photo = 'https://imgs.search.brave.com/YUfhWIxN6OlAXQRWKlydNTBIJjGVgXaVwa3u1Qtr4GQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMzLzUz/LzcxLzMzNTM3MWM0/NTVhNWUyY2QyMWE5/ZjY3NTIyNzkwMDU0/LmpwZw' />
    <Card text = 'Cartoon' photo = 'https://imgs.search.brave.com/uKlHiJiVBnbPCevyZq6ppMQ0UawM3Y4g-WD-Zv5f_QE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiLzQ3/LzJiL2ZiNDcyYjlh/M2ZkZTU5ZDBjODll/ZGRmN2IyNzU2NjVh/LmpwZw' />
    <Card text = 'Superhero' photo = 'https://imgs.search.brave.com/TFPDAfZAnJcoWAx1Ce8E64LGsVc324kEOTbCHWH4d_Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXRvY2FydG9vbi5j/b20vaW1hZ2VzL2lu/ZGV4LWJnLndlYnA'/>
    <Card text = 'Cycleman' photo = 'https://imgs.search.brave.com/sfOxUWXJRhKLvxVMJo9ABEag_nxn8jWnCOtrPhVCVr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzA1LzU2LzQ5/LzM2MF9GXzcwNTU2/NDk0N19zSUpRSkZB/VmxrYmdyV3lldTBm/YXlDN0tDbERkTDFE/Qi5qcGc'/>
    <Card text = 'Spiderman' photo = 'https://imgs.search.brave.com/0_Asozg-h7pKZLAaUSX1vlic7uA8EmWcmufbO0rxMbY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1uZWVkLW1vcmUt/cGljdHVyZXMtb2Yt/c3BpZGVyLW1hbi1q/LWpvbmFoLWphbWVz/b24tcHJvYmFibHkt/djAtZW43aTh6M3M3/ZTZjMS5qcGc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9YzcyNWI3/Y2ZlZDEyNzMwY2Q3/ZGY5YWNhZTQ2YWI2/NzhjZWZkMzFhZQ'/>
   </div>
   </>
  )
}

export default Home
