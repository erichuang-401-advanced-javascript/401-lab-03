# 401-lab-03

ASYNC

This lab was an exercise in understanding how to implement asyncronous functions using both callbacks and promises.
We are given a JSON file with a JSON object and the goal is to use both methods of callbacks and promises to make a change in the JSON object and save it back to its file.

Callbacks

When using callbacks we provide one callback method that handles both error and retrieved data. The retrieved data can be read at any point inside the callback - even if there's an error. To separate error from clean retrieved data we use an if statement to throw an error if one occurs else if there's no error then run the callback and pass in the retrieved data.

When we run this getFile function we retrieve the JSON object which we parse and then edit before writing it back to its original file. Writing/saving it back to its original file must happen at this point while we are still in the callback of the getFile function because only the callback has access to the retrieved data, so we do this here. On resolution we see a console log of 'file saved' and the new object.

Promises

When using promises we separate the error and retrieved data into two callbacks. This is separated using .then for the retrieved data callback and .catch for the error callback. Similar to the previous method, we must still save the edited object while in the .then callback section as only it has access to the retrieved data.