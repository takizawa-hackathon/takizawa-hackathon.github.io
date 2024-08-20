module Jekyll
  module FilterSponsorEvents
    def filter_past_events(events)
      current_time = Time.now.getlocal("+09:00")
      events.select do |event|
        show_until = event['data_show_until'].to_s
        if show_until
          year, month, day = show_until.split('-').map(&:to_i)
          show_until_time = Time.new(year, month, day, 23, 59, 59, "+09:00")
          current_time <= show_until_time
        else
          false
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::FilterSponsorEvents)
