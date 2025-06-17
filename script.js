function refreshDiscordProfile() {
    const discordProfileImg = document.querySelector('.discord-profile img');
    const timestamp = new Date().getTime();
    discordProfileImg.src = ````https://discord.com/channels/@me/1384200306736238632/1384605006652510289```&t=${timestamp}&idleMessage=</> Cheyza Özeldir. </>`;
}


setInterval(refreshDiscordProfile, 5000);

        async function fetchGitHubRepos() {
            try {
                const response = await fetch('https://api.github.com/users/ThePasha2015/repos');
                const repos = await response.json();
                
                const reposContainer = document.getElementById('repos-container');
                
                repos.forEach(repo => {
                    const repoCard = document.createElement('div');
                    repoCard.className = 'repo-card';
                    
                    repoCard.innerHTML = `
                        <a href="${repo.html_url}" target="_blank" style="text-decoration: none;">
                            <h3 class="repo-name">
                                <i class="far fa-folder"></i>
                                ${repo.name}
                            </h3>
                        </a>
                        <p class="repo-description">${repo.description || 'No description available'}</p>
                        <div class="repo-stats">
                            <span class="repo-stat">
                                <i class="far fa-star"></i>
                                ${repo.stargazers_count}
                            </span>
                            <span class="repo-stat">
                                <i class="far fa-code-branch"></i>
                                ${repo.forks_count}
                            </span>
                            <span class="repo-stat">
                                <i class="far fa-dot-circle"></i>
                                ${repo.language || 'Not specified'}
                            </span>
                        </div>
                    `;
                    
                    reposContainer.appendChild(repoCard);
                });
                
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
                const reposContainer = document.getElementById('repos-container');
                reposContainer.innerHTML = `
                    <div class="error-message" style="text-align: center; color: var(--neon-pink);">
                        <p>😔 GitHub repolarını yüklerken bir hata oluştu.</p>
                        <p>Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                `;
            }
        }

        // Call the function when the page loads
        document.addEventListener('DOMContentLoaded', fetchGitHubRepos);
