export default class MistInsights extends React.Component {

    render () {
        var token = this.props.widget.configuration.token || this.props.toolbox.getManager()._data.auth.token,
            uri = this.props.widget.configuration.token && this.props.widget.configuration.uri || '',
            authHeader = this.props.widget.configuration.token && 'Authorization' || 'authentication-token',
            tenant = this.props.toolbox.getManager()._data.tenants.selected || '';

        return (
            <div id="insights">
                <script src="https://dogfood.ops.mist.io/elements/bundled/bower_components/webcomponentsjs/webcomponents-lite.js"></script>
                <link rel="import" href="https://dogfood.ops.mist.io/elements/bundled/bower_components/mist-insights/mist-insights.html" />
                <mist-insights
                    class="cloudify"
                    stack-term="deployment"
                    uri={uri}
                    token={token}
                    auth-header={authHeader}
                    tenant={tenant}></mist-insights>
            </div>
        );
    }
}

Stage.defineWidget({
    name: 'Insights',
    description: 'Insights',
    initialWidth: 12,
    initialHeight: 120,
    color: 'yellow',
    isReact: true,
    hasTemplate: false,
    initialConfiguration: [
        {id: "token", name: "Mist.io token", default: '', type: Stage.Basic.GenericField.STRING_TYPE},
        {id: "uri", name: "Mist.io base URI", default: 'https://mist.io', type: Stage.Basic.GenericField.STRING_TYPE},
    ],
    render: function(widget,data,error,toolbox) {
        return (
            <MistInsights widget={widget} toolbox={toolbox} />
        );
    }
});

