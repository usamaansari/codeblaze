"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import Lookup from "@/data/Lookup";
import axios from "axios";
import Prompt from "@/data/Prompt";
import { MessagesContext } from "@/context/MessagesContext";
import { useParams } from "next/navigation";
import { Loader2Icon } from "lucide-react";

const CodeView = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("code");
  const [files, setFiles] = useState(Lookup?.DEFAULT_FILE);
  const { messages, setMessages } = useContext(MessagesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    id && GetFiles();
  }, [id]);

  const GetFiles = async () => {
    setLoading(true);
    const result = await axios.get(`/api/workspace?id=${id}`);
    const mergedFiles = {
      ...Lookup.DEFAULT_FILE,
      ...result?.data?.workspaces[0].fileData,
    };
    setFiles(mergedFiles);
    setLoading(false);
  };

  useEffect(() => {
    if (messages?.length > 0) {
      const role = messages[messages?.length - 1].role;
      if (role == "user") {
        GenerateAiCode();
      }
    }
  }, [messages]);

  const GenerateAiCode = async () => {
    setLoading(true);
    const PROMPT = JSON.stringify(messages) + " " + Prompt.CODE_GEN_PROMPT;
    const response = await axios.post("/api/gen-ai-code", { prompt: PROMPT });
    console.log(response.data);
    const aiResp = response.data;
    const mergedFiles = { ...Lookup.DEFAULT_FILE, ...aiResp?.files };
    setFiles(mergedFiles);
    const responseUpdate = await axios.patch("/api/filespace", {
      id,
      fileData: aiResp?.files,
    });
    console.log("Updated Messages:", responseUpdate.data);
    setLoading(false);
  };
  return (
    <div className="relative">
      <div className="bg-[#181818] w-full p-2">
        <div className="flex items-center flex-wrap shrink-0 bg-black p-1 w-[140px] gap-3 justify-center rounded-full">
          <h2
            onClick={() => setActiveTab("code")}
            className={`text-sm cursor-pointer ${
              activeTab == "code" &&
              "text-blue-500 bg-blue-200 bg-opacity-25 p-1 px-2 rounded-full"
            }`}
          >
            Code
          </h2>
          <h2
            onClick={() => setActiveTab("preview")}
            className={`text-sm cursor-pointer ${
              activeTab == "preview" &&
              "text-blue-500 bg-blue-200 bg-opacity-25 p-1 px-2 rounded-full"
            }`}
          >
            Preview
          </h2>
        </div>
      </div>
      <SandpackProvider
        files={files}
        template="react"
        theme={"dark"}
        customSetup={{
          dependencies: {
            ...Lookup.DEPENDANCY,
          },
        }}
        options={{
          externalResources: [
            "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
          ],
        }}
      >
        <SandpackLayout>
          {activeTab == "code" && (
            <>
              <SandpackFileExplorer style={{ height: "80vh" }} />
              <SandpackCodeEditor style={{ height: "80vh" }} />
            </>
          )}
          {activeTab == "preview" && (
           <SandpackPreview style={{ height: "80vh" }} showNavigator={true}/>
          )}
        </SandpackLayout>
      </SandpackProvider>
      {loading && (
        <div className="p-10 bg-gray-900 opacity-80 absolute top-0 rounded-lg w-full h-full flex items-center justify-center">
          <Loader2Icon className="animate-spin h-10 w-10 text-white" />
          <h2 className="text-white">Generating your files...</h2>
        </div>
      )}
    </div>
  );
};

export default CodeView;
