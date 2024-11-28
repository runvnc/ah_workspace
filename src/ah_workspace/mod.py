from lib.providers.commands import command

@command()
async def update_workspace(content, context=None):
    """Update the workspace content with HTML.
    
    Parameters:
    content (str): HTML content to display in the workspace area
    
    Returns:
    str: HTML content to display in the workspace area

    Example:
    { "update_workspace": { 
        "content": START_RAW
        <div class="workspace-content">
            <h1>Title</h1>
            <p>Some content here</p>
        </div>
        END_RAW
    } }
    """
    return None
