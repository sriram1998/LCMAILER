module.exports = {
    "concepts": ["array","string","hash-table","dynamic-programming","math","depth-first-search","sorting","greedy","breadth-first-search","tree","binary-search","matrix","binary-tree","two-pointers","bit-manipulation","stack","heap-priority-queue","graph"],
    "difficulty": ["Easy", "Medium", "Hard"], //Include only the difficulties needed.
    "gmailAuth": {"address": process.env.GMAIL_AUTH_EMAIL, "password": process.env.GMAIL_AUTH_PASSWORD}, //setup app password in gmail and provide the creds here.
    "DL": "example1@gmail.com, example2@gmail.com, example3@gmail.com", //enter list of comma separated mail ids
    "cron": "0 10 * * *" //set scheduled time to mail question (currently set to 10AM everyday).
}