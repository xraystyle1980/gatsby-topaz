![Topaz.io](/src/assets/images/20181029_topaz-banner-light.png)

# Topaz.io
Topaz marketing site.

### Online
[Live site: Topaz.io](https://topaz.io)  
Topaz marketing website is built with Gatsby.js and is based on the Photon site template, designed by HTML5 UP. Big thanks for their awesome work to help get us up and running!

### Up and Running
The Topaz marketing site requires SSH access in order to clone.

### Generate SSH and add it to the ssh-agent
If you haven't already, you will need to do this and request access from the Topaz team. More information here:
[Generating a new SSH key and adding it to the agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

### Install Gatsby CLI
If you haven't already, install Gatsby CLI: `npm install --global gatsby-cli`

### Clone Topaz site
```
$ git clone git@github.com:decentorganization/topaz-frontpage.git
```

### Install NPM
Navigate to your new site at `/topaz-frontpage` and run `npm install`
```
$ cd topaz-frontpage
$ npm install
```

### Setup Environment
Get yourself a `.env` file, and update it as you see fit.
```
$ cp .env.example .env
```

### Start the Process
Gatsby will start a hot-reloading development environment accessible at `localhost:8000`
```
$ gatsby develop
```

### CSS Grid
The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
    </div>
</div>
```

### gatsby-starter-photon
Gatsby.js V2 starter based on the Photon site template, designed by HTML5 UP. Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.
