import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://peqateslmhoxphhdnjzt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcWF0ZXNsbWhveHBoaGRuanp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNDE3MjcsImV4cCI6MjAwNDYxNzcyN30.JMDi2JTqcjKNX2XY9cAkt-zD-rsKOgqn4-GNhf9kPjQ')

let { data: Levels, error } = await supabase
  .from('Levels')
  .select('*')

export default Levels