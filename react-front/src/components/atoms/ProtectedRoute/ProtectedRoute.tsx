import React from 'react'
import { Route, RouteComponentProps, Redirect } from 'react-router'

export type ProtectedRouteProps = {
  path: string[]
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>
  failureRedirect: string
  validate: () => boolean
}

export default class ProtectedRoute extends React.Component<ProtectedRouteProps>{
  render(){
    return (
      <Route 
      path={ this.props.path }
      render={ (route) => this.renderRoute(route) }
      />
    )
  }

  private renderRoute(route :  RouteComponentProps<any>) : React.ReactNode{
    if(this.props.validate()){
      return this.renderComponent(route)
    }else{
      return this.renderRedirect()
    }
  }

  private renderComponent(route :  RouteComponentProps<any>){
    const Component = this.props.component
    return (
      <Component { ...route } />
    )
  }

  private renderRedirect(){
    return (
      <Redirect to={ this.props.failureRedirect } push={ true } />
    )
  }
}