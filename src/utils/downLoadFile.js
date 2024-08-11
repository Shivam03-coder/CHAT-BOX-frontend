export const downLoadFile = async (fileUrl) => {
  try {
    console.log("Fetching file:", fileUrl);

    // Adding additional debugging information
    const response = await fetch(fileUrl, {
      credentials: "include", // Include credentials if needed
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("Response received:", response);

    const contentType = response.headers.get("Content-Type");
    console.log("Content-Type:", contentType);

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    // Optional: Check if URL is valid
    if (!url) {
      throw new Error("Failed to create object URL");
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = fileUrl.split("/").pop(); // Optional: Set a default file name
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    console.log("File download initiated successfully");
  } catch (error) {
    console.error("Download failed:", error);
    // Additional debugging information
    if (error.message === "Failed to fetch") {
      console.error(
        "Possible reasons: CORS issue, network issue, or the server is unreachable."
      );
    }
  }
};
