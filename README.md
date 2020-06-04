## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false|
|password|text|null: false|
### Association
- has_many :groups_users, through:  :massages
- has_many :massages
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :groups_users, through:  :massages
- has_many :massages
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user