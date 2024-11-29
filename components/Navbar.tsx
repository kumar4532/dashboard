'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const Navbar = () => {

  const handleDownload = async() => {
    const data = await import("../data/task-data.json")    
    const apiSecret = data.api_secret
    
    if (!apiSecret) {
      throw new Error("Key 'api_secret' not found in the JSON file.");
    }

    const res = await fetch("/api/imgdownload", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api: apiSecret })
    })

    if (!res.ok) {
      throw new Error(`API request failed: ${res.statusText}`);
    }
    
    const { base64_string, filename } = await res.json();

    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${base64_string}`;
    link.download = filename;
    link.click();
  }

  return (
    <div className='absolute top-0 left-0 right-0 flex flex-row justify-between items-center p-8 ml-0 w-full bg-white'>
        <h1 className='text-2xl text-black font-bold'>Reports</h1>
        <Button onClick={handleDownload} size="sm">
            <Download className="h-4 w-4"/> Download
        </Button>
    </div>
  )
}

export default Navbar