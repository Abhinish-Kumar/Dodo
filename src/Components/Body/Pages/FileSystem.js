import "./Page.css";
import Code from "../../../Code";

function FileSystem() {
  return (
    <div className="page">
      <h1>Node.js File System (fs) Module</h1>
      <p>
        The Node.js File System (fs) module provides methods for interacting
        with the file system on your computer. Think of it as a toolbox that
        lets you perform various operations on files, such as reading, writing,
        and deleting, similar to how you'd manage physical documents and folders
        on your computer.
      </p>

      <h2>Importing the fs Module</h2>
      <p>To use the fs module, you first need to import it:</p>
      <Code>
        {`var fs = require('fs');`}
      </Code>
      <p>
        This is akin to opening your toolbox to access different tools for
        working with files.
      </p>

      <h2>Reading Files</h2>
      <p>
        Node.js offers both asynchronous and synchronous methods for reading
        files.
      </p>
      <p>
        <span style={{ color: "green" }}>Asynchronous Reading:</span>{" "}
        Non-blocking; it allows other code to run while waiting for the file
        operation to complete.
      </p>
      <p>
        <span style={{ color: "green" }}>Synchronous Reading:</span> Blocking;
        it stops code execution until the file operation is complete.
      </p>

      <p>
        Example: Suppose you have a file{" "}
        <span style={{ color: "orange" }}>example.txt</span> with some content:
      </p>
      <Code>
        {`
This is a text content written by Abhinish ...
        `}
      </Code>

      <p>You can read this file and serve it over an HTTP server like this:</p>

      <h3>Reading a File Asynchronously</h3>
      <Code>
        {`
var fs = require('fs');

// Asynchronously read the file
fs.readFile('example.txt', function(err, data) {
  if (err) {
    // If there's an error (like the file doesn't exist), show it
    console.error('Error reading file:', err);
    return;
  }
  // If no error, convert the file data to a string and print it
  console.log('File content:', data.toString());
});
        `}
      </Code>
      <p><strong>Explanation:</strong></p>
      <p>
        <span style={{ color: "green" }}>
          fs.readFile('example.txt', callback):
        </span>{" "}
        Reads the file named{" "}
        <span style={{ color: "orange" }}>example.txt</span>.
      </p>
      <p>
        <span style={{ color: "green" }}>callback(err, data):</span> This
        function is called when the file reading is done. It gets two arguments:{" "}
        <span style={{ color: "orange" }}>err</span> (error, if any) and{" "}
        <span style={{ color: "orange" }}>data</span> (the content of the file).
      </p>
      <p><strong>Output:</strong></p>
      <Code>
        {`
File content: This is a text content written by Abhinish ...
        `}
      </Code>

      <h2>Writing to Files</h2>
      <p>
        You can create a new file or overwrite an existing file with the{" "}
        <code>fs.writeFile</code> method. Here's how you can use it:
      </p>

      <h3>Creating or Overwriting a File</h3>
      <Code>
        {`
var fs = require('fs');

// Write to the file
fs.writeFile('example.txt', 'Hello, world!', function(err) {
  if (err) {
    // If there's an error, show it
    console.error('Error writing file:', err);
    return;
  }
  // If no error, confirm the file was written
  console.log('File has been saved!');
});
        `}
      </Code>
      <p><strong>Explanation:</strong></p>
      <p>
        <span style={{ color: "green" }}>
          fs.writeFile('example.txt', 'Hello, world!', callback):
        </span>{" "}
        Creates a new file named{" "}
        <span style={{ color: "orange" }}>example.txt</span> with the content{' '}
        <span style={{ color: "orange" }}>'Hello, world!'</span>, or overwrites
        it if it already exists.
      </p>
      <p>
        <span style={{ color: "green" }}>callback(err):</span> This function is
        called once the file operation is complete. It gets one argument,{" "}
        <span style={{ color: "orange" }}>err</span>, which is an error object if
        something went wrong.
      </p>
      <p><strong>Output:</strong></p>
      <Code>
        {`
File has been saved!
        `}
      </Code>

      <h2>Appending to Files</h2>
      <p>
        To add content to the end of an existing file without removing its current
        content, use the <code>fs.appendFile</code> method:
      </p>

      <h3>Appending Content</h3>
      <Code>
        {`
var fs = require('fs');

// Append to the file
fs.appendFile('example.txt', ' Appended content!', function(err) {
  if (err) {
    // If there's an error, show it
    console.error('Error appending file:', err);
    return;
  }
  // If no error, confirm the content was appended
  console.log('Content appended!');
});
        `}
      </Code>
      <p><strong>Explanation:</strong></p>
      <p>
        <span style={{ color: "green" }}>
          fs.appendFile('example.txt', ' Appended content!', callback):
        </span>{" "}
        Adds the string{' '}
        <span style={{ color: "orange" }}>' Appended content!'</span> to the end of
        the file named{" "}
        <span style={{ color: "orange" }}>example.txt</span>.
      </p>
      <p><strong>Output:</strong></p>
      <Code>
        {`
Content appended!
        `}
      </Code>

      <h2>Deleting Files</h2>
      <p>
        To remove a file, use the <code>fs.unlink</code> method:
      </p>

      <h3>Deleting a File</h3>
      <Code>
        {`
var fs = require('fs');

// Delete the file
fs.unlink('example.txt', function(err) {
  if (err) {
    // If there's an error, show it
    console.error('Error deleting file:', err);
    return;
  }
  // If no error, confirm the file was deleted
  console.log('File has been deleted!');
});
        `}
      </Code>
      <p><strong>Explanation:</strong></p>
      <p>
        <span style={{ color: "green" }}>
          fs.unlink('example.txt', callback):
        </span>{" "}
        Deletes the file named{" "}
        <span style={{ color: "orange" }}>example.txt</span>.
      </p>
      <p>
        <span style={{ color: "green" }}>callback(err):</span> This function is
        called once the file operation is complete. It gets one argument,{" "}
        <span style={{ color: "orange" }}>err</span>, which is an error object if
        something went wrong.
      </p>
      <p><strong>Output:</strong></p>
      <Code>
        {`
File has been deleted!
        `}
      </Code>

      <h2>Renaming Files</h2>
      <p>
        To rename a file, use the <code>fs.rename</code> method:
      </p>

      <h3>Renaming a File</h3>
      <Code>
        {`
var fs = require('fs');

// Rename the file
fs.rename('example.txt', 'newname.txt', function(err) {
  if (err) {
    // If there's an error, show it
    console.error('Error renaming file:', err);
    return;
  }
  // If no error, confirm the file was renamed
  console.log('File has been renamed!');
});
        `}
      </Code>
      <p><strong>Explanation:</strong></p>
      <p>
        <span style={{ color: "green" }}>
          fs.rename('example.txt', 'newname.txt', callback):
        </span>{" "}
        Renames the file from{" "}
        <span style={{ color: "orange" }}>example.txt</span> to{" "}
        <span style={{ color: "orange" }}>newname.txt</span>.
      </p>
      <p>
        <span style={{ color: "green" }}>callback(err):</span> This function is
        called once the file operation is complete. It gets one argument,{" "}
        <span style={{ color: "orange" }}>err</span>, which is an error object if
        something went wrong.
      </p>
      <p><strong>Output:</strong></p>
      <Code>
        {`
File has been renamed!
        `}
      </Code>

      <h2>Checking File Information</h2>
      <p>
        To get details about a file, such as whether it's a file or a directory,
        use the <code>fs.stat</code> method:
      </p>

      <h3>Getting File Information</h3>
      <Code>
        {`
var fs = require('fs');

// Get file information
fs.stat('example.txt', function(err, stats) {
  if (err) {
    // If there's an error, show it
    console.error('Error getting file info:', err);
    return;
  }
  // Show file information
  console.log('File stats:', stats);
  console.log('Is file?', stats.isFile());
  console.log('Is directory?', stats.isDirectory());
});
        `}
      </Code>
      <p><strong>Explanation:</strong></p>
      <p>
        <span style={{ color: "green" }}>
          fs.stat('example.txt', callback):
        </span>{" "}
        Retrieves information about the file named{" "}
        <span style={{ color: "orange" }}>example.txt</span>.
      </p>
      <p>
        <span style={{ color: "green" }}>callback(err, stats):</span> This
        function is called once the file operation is complete. It gets two
        arguments: <span style={{ color: "orange" }}>err</span> (error, if any)
        and <span style={{ color: "orange" }}>stats</span> (file information).
      </p>
      <p>
        You can use <code>stats.isFile()</code> to check if the path is a file
        and <code>stats.isDirectory()</code> to check if it's a directory.
      </p>
      <p><strong>Output:</strong></p>
      <Code>
        {`
File stats: [object Object]
Is file? true
Is directory? false
        `}
      </Code>
    </div>
  );
}

export default FileSystem;
