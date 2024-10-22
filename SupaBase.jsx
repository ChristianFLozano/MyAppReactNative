import 'react-native-url-polyfill/auto'

import {createClient} from "@supabase/supabase-js"

const supaBaseUrl = "https://pvezrfbqhzvdbgjryphz.supabase.co"
const supabeKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2ZXpyZmJxaHp2ZGJnanJ5cGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMDc0NjAsImV4cCI6MjA0NDU4MzQ2MH0.RhJIxYpxo3ZTu7nGcCI0Yo9ypTCtFWqQH_ZCcgewbAg"

export const supabase = createClient(supaBaseUrl, supabeKey)