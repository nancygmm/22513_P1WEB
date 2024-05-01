export async function Api() {
    const info = await fetch("http://localhost:3000/posts")
    const info_json =  await info.json()
    return info_json
   
  }