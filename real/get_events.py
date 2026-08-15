import requests

url = "https://api.github.com/repos/maddurpriyanshu-cyber/AskMyNotes/events"
response = requests.get(url)
events = response.json()

for event in events:
    if event['type'] == 'PushEvent':
        print(f"PushEvent at {event['created_at']}")
        print(f"  Before: {event['payload']['before']}")
        print(f"  Head: {event['payload']['head']}")
        for commit in event['payload'].get('commits', []):
            print(f"  - Commit {commit['sha']}: {commit.get('message', '')}")
