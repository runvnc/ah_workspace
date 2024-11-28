// Register the workspace command handler
window.registerCommandHandler('update_workspace', (data) => {
  const workspace = document.querySelector('workspace-area');
  if (workspace) {
    workspace.setContent(data.content);
  } else {
    console.error('Workspace area not found');
  }
});
