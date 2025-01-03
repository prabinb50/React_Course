import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

    return (
        <Form method="POST" className="create-post" >
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter your user ID here</label>
                <input type="text" name="userId" className="form-control" id="userId" placeholder="Your user Id" />
            </div>

            <div className="mb-3">
                <label htmlFor="tltle" className="form-label">Post Title</label>
                <input type="text" name="title" className="form-control" id="title" placeholder="How are you feeling today" />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea rows="4" type="body" name="body" className="form-control" id="title" placeholder="Tell us more about it" />
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions</label>
                <input type="text" name="reaction" className="form-control" id="reactions" placeholder="How many people reacted to this post" />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
                <input type="text" name="tags" className="form-control" id="tags" placeholder="Please enter tag using space" />
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
    )
}

export async function createPostAction(data) {

    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => {
            // addPost(post)
            console.log(post);

        });
    return redirect("/");
}


export default CreatePost;