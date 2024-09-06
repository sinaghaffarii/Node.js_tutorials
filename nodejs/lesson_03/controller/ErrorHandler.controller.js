const NotFound = (res) => {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        Error: "Not Found!!!",
      })
    );
    res.end();
}

const ErrorHandler = {
    NotFound
}

module.exports = ErrorHandler