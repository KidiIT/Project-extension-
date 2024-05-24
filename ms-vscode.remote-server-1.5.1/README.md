# Visual Studio Code Remote - Tunnels

The **Remote - Tunnels** extension lets you connect to a remote machine, like a desktop PC or virtual machine (VM), via a secure tunnel. You can then securely connect to that machine from anywhere, without the requirement of SSH.

## Getting started

### Make a tunnel available

Begin by making your remote machine accessible through a tunnel:

Run VS Code on the remote machine and use the `Turn on Remote Tunnel Access` command.

![Turn on Remote Tunnel Access](https://microsoft.github.io/vscode-remote-release/images/remote-tunnels-turn-on.png)

or

Run the `tunnel` command in the `code` CLI. 

 ![CLI with tunnel](https://microsoft.github.io/vscode-remote-release/images/remote-tunnels-cli.png)

The [`code` CLI](https://code.visualstudio.com/docs/editor/command-line#_create-remote-tunnel) is part of the regular Windows, Mac and Linux installs, but can also be downloaded separately from https://code.visualstudio.com/#alt-downloads.

### Connect to a tunnel

To connect to a tunnel, have the `Remote Tunnels` extension installed and run the command: `Remote - Tunnels: Connect to Tunnel...`. 
 ![Connect to Tunnel](https://microsoft.github.io/vscode-remote-release/images/remote-tunnels-connect.png)

You can find the command by pressing `F1` to open the Command Palette or by clicking on the remote indicator in the lower left corner.

You'll be prompted to log into GitHub and will get a list of available tunnels to connect to.

 ![Select Tunnel](https://microsoft.github.io/vscode-remote-release/images/remote-tunnels-select-tunnel.png)

After selecting a tunnel, the window will reload to connect to the remote machine. Note that the remote indicator in the lower left corner now shows the name of the tunnel. 

 ![Remote Window Indicator](https://microsoft.github.io/vscode-remote-release/images/remote-tunnels-connected.png)

You can also open a tunnel in the Remote Explorer:

 ![Remote Explorer](https://microsoft.github.io/vscode-remote-release/images/remote-tunnels-explorer.png)

Check out the [Remote - Tunnels](https://code.visualstudio.com/docs/remote/tunnels) and [VS Code Server](https://aka.ms/vscode-server-doc) documentation for more information.

## Release Notes

This extension releases with VS Code. [VS Code release notes](https://code.visualstudio.com/updates/) include a summary of changes to all Remote Development extensions with a link to [detailed release notes](https://github.com/microsoft/vscode-docs/tree/main/remote-release-notes).

As with VS Code itself, the extensions update during a development iteration. You can use the [pre-release version](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#prerelease-extensions) of this extension to regularly get the latest extension updates before the official extension release.

## Questions, Feedback, Contributing

Have a question or feedback?

- See the [documentation](https://aka.ms/vscode-remote) or the [troubleshooting guide](https://aka.ms/vscode-remote/troubleshooting).
- [Up-vote a feature or request a new one](https://aka.ms/vscode-remote/feature-requests), search [existing issues](https://aka.ms/vscode-remote/issues), or [report a problem](https://aka.ms/vscode-remote/issues/new).
- Contribute to [our documentation](https://github.com/Microsoft/vscode-docs)
- ...and more. See our [CONTRIBUTING](https://aka.ms/vscode-remote/contributing) guide for details.

## Telemetry

Visual Studio Code Remote - Tunnels and related extensions collect telemetry data to help us build a better experience working remotely from VS Code. We only collect data on which commands are executed. We do not collect any information about image names, paths, etc. The extension respects the `telemetry.enableTelemetry` setting which you can learn more about in the [Visual Studio Code FAQ](https://aka.ms/vscode-remote/telemetry).

## License

By downloading and using the Visual Studio Remote - Tunnels extension and its related components, you agree to the product [license terms](https://go.microsoft.com/fwlink/?linkid=2077057) and [privacy statement](https://www.microsoft.com/en-us/privacystatement/EnterpriseDev/default.aspx).

