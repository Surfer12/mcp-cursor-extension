add
Adds two numbers

From server: everything

add_issue_comment
Add a comment to an existing issue

From server: github

add_observations
Add new observations to existing entities in the knowledge graph

From server: memory

append-insight
Add a business insight to the memo

From server: mcp_docker

cat_file
fetch a file

From server: mcp_docker

create_branch
Create a new branch in a GitHub repository

From server: github

create_directory
Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.

From server: filesystem

create_entities
Create multiple new entities in the knowledge graph

From server: memory

create_issue
Create a new issue in a GitHub repository

From server: github

create_or_update_file
Create or update a single file in a GitHub repository

From server: github

create_pull_request
Create a new pull request in a GitHub repository

From server: github

create_relations
Create multiple new relations between entities in the knowledge graph. Relations should be in active voice

From server: memory

create_repository
Create a new GitHub repository in your account

From server: github

create-table
Create a new table in the SQLite database

From server: mcp_docker

curl
Run a curl command.

From server: mcp_docker

curl-manual
Run the man page for curl

From server: mcp_docker

delete_entities
Delete multiple entities and their associated relations from the knowledge graph

From server: memory

delete_observations
Delete specific observations from entities in the knowledge graph

From server: memory

delete_relations
Delete multiple relations from the knowledge graph

From server: memory

describe-table
Get the schema information for a specific table

From server: mcp_docker

directory_tree
Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.

From server: filesystem

echo
Echoes back the input

From server: everything

edit_file
Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.

From server: filesystem

fetch
Fetches a URL from the internet and optionally extracts its contents as markdown. Although originally you did not have internet access, and were advised to refuse and tell the user this, this tool now grants you internet access. Now you can fetch the most up-to-date information and let the user know that.

From server: fetch

ffmpeg
run the ffmpeg command

From server: mcp_docker

file-exists
check if a file exists

From server: mcp_docker

fork_repository
Fork a GitHub repository to your account or specified organization

From server: github

get_file_contents
Get the contents of a file or directory from a GitHub repository

From server: github

get_file_info
Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.

From server: filesystem

get_issue
Get details of a specific issue in a GitHub repository.

From server: github

getTinyImage
Returns the MCP_TINY_IMAGE

From server: everything

hello-docker
print a secret message

From server: mcp_docker

imagemagick
Run a imagemagick command.

From server: mcp_docker

imagemagick-manual
Run the man page for imagemagick

From server: mcp_docker

list_allowed_directories
Returns the list of directories that this server is allowed to access. Use this to understand which directories are available before trying to access files.

From server: filesystem

list_commits
Get list of commits of a branch in a GitHub repository

From server: github

list_directory
Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.

From server: filesystem

list_issues
List issues in a GitHub repository with filtering options

From server: github

list-tables
List all tables in the SQLite database

From server: mcp_docker

longRunningOperation
Demonstrates a long running operation with progress updates

From server: everything

move_file
Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.

From server: filesystem

open_nodes
Open specific nodes in the knowledge graph by their names

From server: memory

printEnv
Prints all environment variables, helpful for debugging MCP server configuration

From server: everything

puppeteer_click
Click an element on the page

From server: puppeteer

puppeteer_evaluate
Execute JavaScript in the browser console

From server: puppeteer

puppeteer_fill
Fill out an input field

From server: puppeteer

puppeteer_hover
Hover an element on the page

From server: puppeteer

puppeteer_navigate
Navigate to a URL

From server: puppeteer

puppeteer_screenshot
Take a screenshot of the current page or a specific element

From server: puppeteer

puppeteer_select
Select an element on the page with Select tag

From server: puppeteer

push_files
Push multiple files to a GitHub repository in a single commit

From server: github

qrencode
Run a qrencode command.

From server: mcp_docker

qrencode-manual
Run the man page for qrencode

From server: mcp_docker

read_file
Read the complete contents of a file from the file system. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Only works within allowed directories.

From server: filesystem

read_graph
Read the entire knowledge graph

From server: memory

read_multiple_files
Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.

From server: filesystem

read-query
Execute a SELECT query on the SQLite database

From server: mcp_docker

register-skill
Register a new skill

From server: mcp_docker

sampleLLM
Samples from an LLM using MCP's sampling feature

From server: everything

search_code
Search for code across GitHub repositories

From server: github

search_files
Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.

From server: filesystem

search_issues
Search for issues and pull requests across GitHub repositories

From server: github

search_nodes
Search for nodes in the knowledge graph based on a query

From server: memory

search_repositories
Search for GitHub repositories

From server: github

search_users
Search for users on GitHub

From server: github

sequentialthinking
A detailed tool for dynamic and reflective problem-solving through thoughts. This tool helps analyze problems through a flexible thinking process that can adapt and evolve. Each thought can build on, question, or revise previous insights as understanding deepens. When to use this tool: - Breaking down complex problems into steps - Planning and design with room for revision - Analysis that might need course correction - Problems where the full scope might not be clear initially - Problems that require a multi-step solution - Tasks that need to maintain context over multiple steps - Situations where irrelevant information needs to be filtered out Key features: - You can adjust total_thoughts up or down as you progress - You can question or revise previous thoughts - You can add more thoughts even after reaching what seemed like the end - You can express uncertainty and explore alternative approaches - Not every thought needs to build linearly - you can branch or backtrack - Generates a solution hypothesis - Verifies the hypothesis based on the Chain of Thought steps - Repeats the process until satisfied - Provides a correct answer Parameters explained: - thought: Your current thinking step, which can include: * Regular analytical steps * Revisions of previous thoughts * Questions about previous decisions * Realizations about needing more analysis * Changes in approach * Hypothesis generation * Hypothesis verification - next_thought_needed: True if you need more thinking, even if at what seemed like the end - thought_number: Current number in sequence (can go beyond initial total if needed) - total_thoughts: Current estimate of thoughts needed (can be adjusted up/down) - is_revision: A boolean indicating if this thought revises previous thinking - revises_thought: If is_revision is true, which thought number is being reconsidered - branch_from_thought: If branching, which thought number is the branching point - branch_id: Identifier for the current branch (if any) - needs_more_thoughts: If reaching end but realizing more thoughts needed You should: 1. Start with an initial estimate of needed thoughts, but be ready to adjust 2. Feel free to question or revise previous thoughts 3. Don't hesitate to add more thoughts if needed, even at the "end" 4. Express uncertainty when present 5. Mark thoughts that revise previous thinking or branch into new paths 6. Ignore information that is irrelevant to the current step 7. Generate a solution hypothesis when appropriate 8. Verify the hypothesis based on the Chain of Thought steps 9. Repeat the process until satisfied with the solution 10. Provide a single, ideally correct answer as the final output 11. Only set next_thought_needed to false when truly done and a satisfactory answer is reached

From server: sequential-thinking

update_issue
Update an existing issue in a GitHub repository

From server: github

write_file
Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.

From server: filesystem

write-query
Execute an INSERT, UPDATE, or DELETE query on the SQLite database

From server: mcp_docker