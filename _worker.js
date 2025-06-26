export default { 
    async fetch(request) { 
   
      const domain = "sfdfsdf.cyou" 
   
      const remote = `https://${domain}${request.url.split('pages.dev')[1] ? request.url.split('pages.dev')[1] : '/'}`; 
   
      return await fetch(remote, request); 
    }, 
  };
  
  