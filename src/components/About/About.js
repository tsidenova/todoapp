import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import Card from '@material-ui/core/Card';
import email from './img/email.png';
import github from './img/github.png';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';
import vk from './img/vk.png';
import phone from './img/telephone.png';
import star from './img/star.png';
import fork from './img/forks.png';
import classnames from 'classnames';


const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userName: '',
		login: '',
		bio: '',
		myAvatar: '',
		fetchFailure: false
	}

	componentDidMount () {
		octokit.repos.listForUser({
			username: 'tsidenova'
		}).then(({ data }) => {
				this.setState({
					repoList: data,
					isLoading: false,	
				})				
			}).catch(() => {
					this.setState ({
						fetchFailure: true
					});
				})
			
		
		octokit.users.getByUsername({
  			username: 'tsidenova'
		}).then(({ data }) =>{
				this.setState({
					userName: data.name,
					login: data.login,
					bio: data.bio,
					myAvatar: data.avatar_url
				})					 
			}).catch(() => {
					this.setState ({
						fetchFailure: true
					});
				})
	}

	render () {
		const { isLoading, repoList, userName, login, bio, fetchFailure, myAvatar } = this.state;
		return (
			<div className={styles.main}>
				<div className={styles.block__info}>
					<Card>
						{ isLoading ? <CircularProgress/> :<div className={styles.main__info}>
							<div className={styles.img}>
								<img src={ myAvatar } alt='myPhoto' className={styles.img}></img>
							</div>
							<div className={styles.info}>
								<h3 className={styles.name}> { userName } </h3>
								<p className={styles.text_login}>Github login: { login } </p>
								<p className={styles.text_bio}> Bio: { bio } </p>
								<div className={styles.email}>
									<img src={ email } alt='gmail'></img>
									<p className={styles.email__text}>tsidenovatb@gmail.com</p>
								</div>
								<div className={styles.phone}>
									<img src={ phone } alt='phone number'></img>
									<p className={styles.phone__number}> +971 567362947</p>
								</div>
								<div className={styles.social}>
									<a href='https://github.com/tsidenova'><img src={ github } alt='github'></img></a>
									<a href='https://www.facebook.com/profile.php?id=100001686938997'><img src={ facebook } alt='facebook'></img></a>
									<a href='https://www.linkedin.com/in/tuyana-tsydenova-7b0b1aab/'><img src={ linkedin } alt='linkedin'></img></a>
									<a href='https://vk.com/id2682239'><img src={ vk } alt='vkontakte'></img></a>
								</div>	
							</div>
						</div>	}
					</Card>
				</div>
				<Card className={styles.myrepos}>
					<div className={styles.repos}>
						<p className={styles.text}>{ isLoading ? <CircularProgress/> : 'My repositories:' }</p>
						{!isLoading && <ol className={styles.list}>
							{repoList.map(repo =>(<li  className={styles.item} key={repo.id}>
									<p className={styles.repolink}><a href={repo.html_url} className={styles.link}>{repo.name}</a></p>
									<div className={styles.add__info}>
										<p className={
											classnames ({
												[styles.html]: repo.language === 'HTML',
												[styles.css]: repo.language === 'CSS',
												[styles.js]: repo.language === 'JavaScript'
											})}>
										</p>
										<div className={styles.add__info_rest}>
											<span> {repo.language} </span>
											<img src={ star } alt='star'></img>
											<span> {repo.stargazers_count} </span>
											<img src={ fork } alt='fork'></img>
											<span> {repo.forks} </span>
											<span> Last update: {repo.updated_at} </span>
										</div>
									</div>
								</li>))}
						</ol>}
					</div>
				</Card>	
				<Card className={styles.myprojects}>
					<div className={styles.myprojects__block}>
						<p className={styles.projects__text}>{ isLoading ? <CircularProgress/> : 'My projects:' }</p>
						{!isLoading && <ol>
							<li className={styles.project}><a className={styles.project__link} href='https://tsidenova.github.io/'>HTML</a></li>
							<li className={styles.project}><a className={styles.project__link} href='https://tsidenova.github.io/tuyanafinalJS/'>JavaScript(game)</a></li>
						</ol>}
					</div>
				</Card>
				{fetchFailure && <div>Something went wrong...</div>}
			</div>
		);
	}
}

export default About;