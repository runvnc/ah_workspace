// Register the workspace command handler
window.registerCommandHandler('update_workspace', (data) => {
  console.log('update_workspace', data);
  const workspace = document.querySelector('workspace-area');
  if (workspace) {
    workspace.setContent(data.args.content);
  } else {
    console.error('Workspace area not found');
  }
});
