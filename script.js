let api= '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';
        let inpt=document.getElementById("inpt");
        let images=document.querySelector(".images");
        
        const getImage = async () => {
           const methods = {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${api}` 
            },
            body:JSON.stringify(
                {
                    "prompt":inpt.value,
                    "n":3,
                     "size":"256x256"
                }
            )
           }
            const res = await fetch("https://api.openai.com/v1/images/generations", methods);
            const data = await res.json();
            const lisImages = data.data;
            lisImages.map(photo => {
                const container = document.createElement("div");
                images.append(container);
                const img = document.createElement("img");
                container.append(img);
                img.src = photo.url;
            });
        }