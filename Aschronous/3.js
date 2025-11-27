async function getUserData(userID){
    try{
    const user =  await fetchUser(userID);
    const posts = await fetchPosts(user.userName);
    
    return {
        user : user,
        posts : posts
    };

    }catch(error){
        console.log("Error",error);
    }
}