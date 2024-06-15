"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const ScriptGenrate = ({ userApi }) => {
  const [generatedScript, setGeneratedScript] = useState("");

  const generateScript = async () => {
    if (userApi) {
      try {
        const scriptContent = `
           <style>
  .tree-container {
    background-color: #42b932;
    padding: 20px;
    margin: 20px auto;
    border-radius: 5px;
    max-width: 500px;
    font-size: 30px;
    color: white;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    position: relative; /* Added */
    overflow: hidden; /* Added */
    cursor: pointer; /* Added */
    transition: background-color 0.3s ease; /* Added */
    border: 2px solid transparent; /* Added */
    box-shadow: 2px 4px 8px #5c391a;
  }

  .tree-container:hover {
    background-color: #2b7a21; /* Darker shade on hover */
    border-color: #fff; /* Border color on hover */
  }

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    line-height: 0px;
    margin-top: 20px;
    height: 50px;
    padding: 10px 0;
  }

  .tree-image {
    width: 200px;
  }

  .tree-text {
    font-size: 18px;
  }
</style>
            <script>
                function fetchData() {
                    fetch('${process.env.API_URL}/user/tree-record-api?api_key=${userApi}', {
                        method: 'GET',
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        var divElement = document.createElement('div');
                        var divInner = document.createElement('div');
                        var imgEle = document.createElement('img');
                        var p = document.createElement('p');
                        
                        divElement.classList.add('tree-container');
                        divInner.classList.add('inner-container');
                        imgEle.classList.add('tree-image');
                        p.classList.add('tree-text');
                        
                        divInner.innerText = JSON.stringify(data.data !== undefined ? data.data.tree_planted : 0);
                        imgEle.src = "https://reborngreen.fra1.cdn.digitaloceanspaces.com/general/Tree%20Widget.png";
                        p.innerHTML = "Trees Planted";
                        
                        document.querySelector('body').appendChild(divElement);
                        divElement.appendChild(imgEle);
                        divInner.appendChild(p);
                        divElement.appendChild(divInner);
                    })
                    .catch(error => {
                        console.error('There was a problem fetching the data:', error);
                    });
                }
                fetchData();
            </script>
        `;

        // Set the generated script content
        setGeneratedScript(scriptContent);
      } catch (error) {
        console.error("Request failed:", error.message);
      }
    }
  };

  const copyScript = () => {
    navigator.clipboard
      .writeText(generatedScript)
      .then(() => {
        toast.success("Script copied to clipboard!");
        setGeneratedScript("");
      })
      .catch((error) => {
        toast.error("Failed to copy script:", error);
      });
  };

  return (
    <div className="flex items-center my-5 justify-center">
      {generatedScript !== "" ? (
        <div className="w-full  h-auto rounded-xl relative">
          <textarea
            name=""
            value={generatedScript}
            className="bg-dark  outline-none rounded-xl no-scrollbar text-white w-full min-h-[600px] resize-none"
            id=""
            readOnly
          ></textarea>
          <p
            className="absolute cursor-pointer flex gap-2 text-sm top-5 right-5 text-[#ceb2b2]"
            onClick={() => copyScript()}
          >
            <FiCopy className="text-white" size={20} /> copy Code
          </p>
        </div>
      ) : (
        <button
          onClick={() => generateScript()}
          className="px-8 py-4 bg-blue-800 text-white hover:bg-blue-900 rounded-md"
        >
          Genrate Script
        </button>
      )}
    </div>
  );
};

export default ScriptGenrate;
