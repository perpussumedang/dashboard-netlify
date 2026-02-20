exports.handler = async function(event, context) {
    if (event.httpMethod === "POST") {
      const data = JSON.parse(event.body);
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Pengajuan berhasil diterima",
          data: data
        })
      };
    }
  
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  };